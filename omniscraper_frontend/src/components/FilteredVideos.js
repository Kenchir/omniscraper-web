import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DialogContent from "@material-ui/core/DialogContent";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from "@material-ui/core";
import MovieOutlinedIcon from "@material-ui/icons/MovieOutlined";
import MoreIcon from "@material-ui/icons/MoreVert";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Link } from "react-router-dom";
import axios from "axios";
import { axiosInstance } from "../axiosInstance";
import { withRouter } from "react-router";
const styles = (theme) => ({
  root: {
    color: "#185adb",
    flex: 1,
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 100,
    // position: "relative",
  },
  spinner: {
    color: "#185adb",
    margin: 20,
  },
  buttons: {
    border: "1px solid #185adb",
    color: "#185adb",
    fontFamily: "Montserrat",
  },
  title: {
    "& h2": {
      fontFamily: "inherit",
      fontWeight: 700,
    },
  },
  menuItemText: {
    fontFamily: "inherit",
  },
  fab: {
    margin: 0,
    left: "auto",
    top: "auto",
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    textTransform: "none",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
});

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" color="primary" />;

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      videos: [],
      loadingTags: false,
      open: false,
      clickedVideo: {},
      flagging: false,
      mouseX: null,
      mouseY: null,
      tagsDialogOpen: false,
      createTagDialogOpen: false,
      tagName: "",
      description: "",
      selectedTagsIds: [],
      editingVideoTags: false,
      slug: this.props.match.params.slug,
    };
  }

  componentDidMount = () => {
    this.loadVideos();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      this.setState({ slug: this.props.match.params.slug, videos: [] }, () =>
        this.loadVideos()
      );
    }
  }

  loadVideos = () => {
    const slug = this.props.match.params.slug;
    const url = `https://omniscraper.herokuapp.com/api/tags/${slug}`;

    this.setState({ loading: true }, () => {
      axios
        .get(url)
        .then((res) => {
          const newVideos = res.data.videos;

          this.setState({
            loading: false,
            videos: [...this.state.videos, ...newVideos],
          });
        })
        .catch((err) => {
          this.setState({
            error: err.message,
            loading: false,
          });
        });
    });
  };

  flagVideo = (video) => {
    const url = `${video.slug}`;
    const flagged = true;

    this.setState({ flagging: true }, () => {
      axiosInstance
        .put(url, {
          id: video.id,
          url: video.url,
          parent_tweet_id: video.parent_tweet_id,
          slug: video.slug,
          flagged: flagged,
        })
        .then((response) => {
          if (response.status === 200) {
            const newVideos = this.state.videos.filter(
              (v) => v.id !== video.id
            );
            this.setState({ flagging: false, videos: newVideos });
            this.handlePromptClose();
          }
        })
        .catch((err) => {
          this.setState({ flagging: false });
          this.handlePromptClose();
        });
    });
  };

  handleCreateTag = () => {
    const url = "https://omniscraper.herokuapp.com/api/tags/";
    const { tagName, description } = this.state;

    this.setState({ creatingTag: true }, () => {
      axiosInstance
        .post(url, {
          tag_name: tagName,
          description,
        })
        .then((response) => {
          if (response.status === 201) {
            this.setState({ creatingTag: false });
            this.handleCreateDialogClose();
            this.props.loadTags();
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({ creatingTag: false });
        });
    });
  };

  handleMenuClick = (video, e) => {
    const { videoTags } = this.props;
    this.handleCheckedTags(videoTags, video);

    this.setState({
      mouseX: e.clientX - 2,
      mouseY: e.clientY - 4,
      clickedVideo: video,
    });
  };

  handleMenuClose = () => {
    this.setState({ mouseX: null, mouseY: null, clickedVideo: {} });
  };

  handlePromptOpen = () => {
    this.setState({ open: true });
  };

  handlePromptClose = () => {
    this.setState({ open: false });
    this.handleMenuClose();
  };

  handleTagsDialogOpen = () => {
    this.setState({ tagsDialogOpen: true });
  };

  handleTagsDialogClose = () => {
    this.setState({ tagsDialogOpen: false });
    this.handleMenuClose();
  };

  handleCreateDialogOpen = () => {
    this.setState({ createTagDialogOpen: true });
  };

  handleCreateDialogClose = () => {
    this.setState({ createTagDialogOpen: false, tagName: "", description: "" });
  };

  handleTagChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSelectedTagsChange = (e, values) => {
    this.setState({
      selectedTagsIds: values.map((value) => value.id),
    });
  };

  handleEditVideoTags = () => {
    const { selectedTagsIds, clickedVideo } = this.state;

    const url = `https://omniscraper.herokuapp.com/api/${clickedVideo.slug}`;

    this.setState({ editingVideoTags: true }, () => {
      axiosInstance
        .patch(url, {
          tags: selectedTagsIds,
        })
        .then((res) => {
          console.log(res.status);
          this.setState({ editingVideoTags: false });
          this.handleTagsDialogClose();
        })
        .catch((err) => {
          console.log(err.message);
          this.setState({ editingVideoTags: false });
          this.handleTagsDialogClose();
        });
    });
  };

  handleCheckedTags = (tags, clickedVideo) => {
    const checked = tags.filter((t) => clickedVideo.tags.includes(t.id));
    this.setState({ checkedTags: checked });
  };

  render() {
    const {
      error,
      loading,
      hasMore,
      videos,
      open,
      clickedVideo,
      flagging,
      mouseX,
      mouseY,
      tagsDialogOpen,
      createTagDialogOpen,
      tagName,
      description,
      creatingTag,
      selectedTagsIds,
      editingVideoTags,
      checkedTags,
    } = this.state;

    const { classes, loggedIn, videoTags } = this.props;
    const {
      flagVideo,
      handlePromptOpen,
      handlePromptClose,
      handleMenuClick,
      handleMenuClose,
      handleTagsDialogOpen,
      handleTagsDialogClose,
      handleCreateDialogOpen,
      handleCreateDialogClose,
      handleTagChange,
      handleCreateTag,
      handleSelectedTagsChange,
      handleEditVideoTags,
      handleCheckedTags,
    } = this;

    const createTagDialog = (
      <Dialog
        fullWidth={true}
        open={createTagDialogOpen}
        onClose={handleCreateDialogClose}
      >
        <DialogTitle
          className={classes.title}
          style={{ flex: 1, display: "flex", justifyContent: "space-between" }}
        >
          Create a tag
          <IconButton
            className={classes.closeButton}
            onClick={handleCreateDialogClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <TextField
            required
            variant="outlined"
            margin="normal"
            fullWidth
            label="Tag name"
            name="tagName"
            onChange={handleTagChange}
            value={tagName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Description (optional)"
            multiline={true}
            name="description"
            onChange={handleTagChange}
            value={description}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            style={{ fontFamily: "inherit", fontWeight: 600 }}
            onClick={handleCreateDialogClose}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            autoFocus
            style={{ fontFamily: "inherit", fontWeight: 600 }}
            onClick={handleCreateTag}
            endIcon={
              creatingTag ? <CircularProgress size={16} color="white" /> : ""
            }
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );

    const tagsDialog = (
      <Dialog
        open={tagsDialogOpen}
        onClose={handleTagsDialogClose}
        fullWidth={true}
      >
        <DialogTitle className={classes.title}>
          Edit video tags
          <IconButton
            className={classes.closeButton}
            onClick={handleTagsDialogClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Autocomplete
            fullWidth={true}
            open={tagsDialogOpen}
            multiple
            onChange={handleSelectedTagsChange}
            options={videoTags}
            defaultValue={checkedTags}
            disableCloseOnSelect
            filterSelectedOptions={true}
            getOptionLabel={(option) => option.tag_name}
            renderOption={(option, { selected }) => (
              <React.Fragment>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                  color="primary"
                />
                {option.tag_name}
              </React.Fragment>
            )}
            style={{ width: "100%", height: "52vh" }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" label="Tags" />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            style={{ fontFamily: "inherit", fontWeight: 600 }}
            onClick={handleTagsDialogClose}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            autoFocus
            style={{ fontFamily: "inherit", fontWeight: 600 }}
            onClick={handleEditVideoTags}
            endIcon={
              editingVideoTags ? (
                <CircularProgress size={16} color="white" />
              ) : (
                ""
              )
            }
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );

    return (
      <div className={classes.root}>
        <Menu
          keepMounted
          open={mouseY !== null}
          onClose={handleMenuClose}
          anchorReference="anchorPosition"
          anchorPosition={
            mouseY !== null && mouseX !== null
              ? { top: mouseY, left: mouseX }
              : undefined
          }
        >
          <MenuItem className={classes.menuItemText} onClick={handlePromptOpen}>
            Report
          </MenuItem>
          <MenuItem
            className={classes.menuItemText}
            onClick={handleTagsDialogOpen}
          >
            Edit video tags
          </MenuItem>
        </Menu>
        {tagsDialog}
        {createTagDialog}

        <Dialog open={open} onClose={handlePromptClose}>
          <DialogTitle className={classes.title}>
            Are you sure you want to report this video?
          </DialogTitle>
          <DialogActions>
            <Button
              onClick={handlePromptClose}
              color="primary"
              style={{ fontFamily: "inherit" }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => flagVideo(clickedVideo)}
              color="secondary"
              variant="contained"
              autoFocus
              style={{ fontFamily: "inherit" }}
              endIcon={
                flagging ? <CircularProgress size={16} color="white" /> : ""
              }
            >
              Report
            </Button>
          </DialogActions>
        </Dialog>
        <div>
          {videoTags.map((tag) => (
            <Chip
              to={`/tags/${tag.slug}`}
              component={Link}
              key={tag.tag_name}
              label={tag.tag_name}
              clickable
              color="primary"
              variant={
                this.props.clickedTag !== null &&
                this.props.clickedTag.id == tag.id
                  ? "default"
                  : "outlined"
              }
              style={{ margin: 5 }}
              onClick={() => this.props.handleClickedTag(tag)}
            />
          ))}
        </div>
        <Grid container spacing={6} style={{ marginTop: 10 }}>
          {videos.map((video) => (
            <Grid item lg={3} md={6} sm={6} xs={12} key={video.id}>
              <Card style={{ maxWidth: 380 }}>
                <CardActionArea component={Link} to={`/${video.slug}`}>
                  <CardMedia
                    component="video"
                    height="160"
                    disablePictureInPicture
                    controlsList="nodownload"
                    src={video.url}
                    style={{ objectFit: "cover" }}
                    onContextMenu={(e) => e.preventDefault()}
                  ></CardMedia>
                </CardActionArea>
                <CardActions
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {loggedIn && (
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={(e) => handleMenuClick(video, e)}
                    >
                      <MoreIcon />
                    </IconButton>
                  )}

                  <Button
                    component={Link}
                    to={`/${video.slug}`}
                    size="small"
                    variant="outlined"
                    color="primary"
                    startIcon={<MovieOutlinedIcon />}
                    className={classes.buttons}
                    style={{
                      fontFamily: "inherit",
                      marginLeft: "auto",
                    }}
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          {error && <div>{error}</div>}
          {/* {videos.length === 0 && (
            <p style={{ color: "#1a1c20" }}>
              There are no videos related to this tag
            </p>
          )} */}
        </Grid>

        {loggedIn && (
          <React.Fragment>
            <Hidden mdDown>
              <Fab
                className={classes.fab}
                color="primary"
                variant="extended"
                size="medium"
                onClick={handleCreateDialogOpen}
              >
                <AddIcon style={{ marginRight: 8 }} />
                Create tag
              </Fab>
            </Hidden>
            <Hidden mdUp>
              <Fab
                className={classes.fab}
                color="primary"
                onClick={handleCreateDialogOpen}
              >
                <AddIcon />
              </Fab>
            </Hidden>
          </React.Fragment>
        )}

        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50px",
              margin: "30px",
            }}
          >
            <CircularProgress className={classes.spinner} />
          </div>
        )}
        {/* {!hasMore && <div>No more videos</div>} */}
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Home));