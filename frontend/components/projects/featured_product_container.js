import React from 'react';
import { Link } from 'react-router-dom';

/*
Export a `PostShow` presentational component that renders a post's information
(title and body). This component should receive the `post` from the store as
props via its container and fetch it once it has successfully mounted to the
DOM. Additionally, this component should contain a link back to the `PostIndex`.
*/

class PostIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        const { posts, deletePost } = this.props;
        const result = posts.map((post) => {
            return <PostIndexItem post={post} deletePost={deletePost} />
        })
        return (
            <>
                <ul>
                    {result}
                </ul>
                <CreatePostFormContainer />
            </>
        )
    }
}

export default PostIndex;
