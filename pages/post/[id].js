function Post({post}){
    return (
        <div>
            {JSON.stringify(post)}
        </div>
    )
}

export async function getStaticPaths(){
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } }
          ],
        fallback: false
    }
}


export async function getStaticProps({params}){
    console.log(params);
    return {
        props: {}
    }
}

export default Post;