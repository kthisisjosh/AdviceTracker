import React from "react"
import Paper from "@material-ui/core/Paper"
import { Typography, Grid, Avatar } from "@material-ui/core"

const Hit = ({ hit }) => {
    return (
        <Paper style={{ marginBottom: "2.5vh", width: "auto" }}>
            <Grid container direction="column" style={{ padding: "0.5vh 0.5vw" }}>
                <Grid container direction="row" style={{ margin: "auto" }}>
                    <Grid item>
                        <Avatar alt={hit.user_name} src={hit.user_image_url}>
                            {hit.user_name.charAt(0)}
                        </Avatar>
                    </Grid>
                    <Grid item style={{ paddingTop: "1vh", marginLeft: "0.5vw" }}>
                        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: hit.user_name }} />
                    </Grid>
                    <Grid item style={{ paddingTop: "1vh", marginLeft: "0.5vw" }}>
                        <Typography variant="button">{hit.likes} likes</Typography>
                    </Grid>
                    <Grid item style={{ paddingTop: "1vh", marginLeft: "0.5vw" }}>
                        <Typography variant="button">{hit.num_of_comments} comments</Typography>
                    </Grid>
                    <Grid item style={{ paddingTop: "0.75vh", marginLeft: "0.5vw" }}>
                        <Grid container direction="row">
                            {hit.category.map((category) => (
                                <Paper style={{padding: "0.125vh 0.25vw", marginRight: "1vh"}}>
                                    <Typography variant="button">{category}</Typography>
                                </Paper>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="body1" dangerouslySetInnerHTML={{ __html: hit.content }} />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Hit
