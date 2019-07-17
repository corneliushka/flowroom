const initState  = {
    posts: [
        {id: 1, title: 'Workshop : Components Reutilisables', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime exercitationem officia, tempora magnam, quaerat amet quis consequuntur eius iusto laudantium incidunt, quasi laborum explicabo laboriosam libero illo ea velit.'},
        {id: 2, title: 'Workshop : GraphQL : Connect API to React via GraphQL schema', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime exercitationem officia, tempora magnam, quaerat amet quis consequuntur eius iusto laudantium incidunt, quasi laborum explicabo laboriosam libero illo ea velit.'},
        {id: 3, title: 'Workshop : Introduction to docker', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime exercitationem officia, tempora magnam, quaerat amet quis consequuntur eius iusto laudantium incidunt, quasi laborum explicabo laboriosam libero illo ea velit.'}
        
    ]
}

const rootReducer = (state = initState, action) => {
    // console.log(action);
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;