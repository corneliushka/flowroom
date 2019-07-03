const initState  = {
    posts: [
        {id: 1, title: 'workshop 1', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime exercitationem officia, tempora magnam, quaerat amet quis consequuntur eius iusto laudantium incidunt, quasi laborum explicabo laboriosam libero illo ea velit.'},
        {id: 2, title: 'workshop 2', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime exercitationem officia, tempora magnam, quaerat amet quis consequuntur eius iusto laudantium incidunt, quasi laborum explicabo laboriosam libero illo ea velit.'},
        {id: 3, title: 'workshop 3', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime exercitationem officia, tempora magnam, quaerat amet quis consequuntur eius iusto laudantium incidunt, quasi laborum explicabo laboriosam libero illo ea velit.'}
        
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;