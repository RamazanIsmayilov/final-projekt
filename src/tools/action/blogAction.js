export const addBlog = ({ img, title, desc }) => ({
    type: "ADD_BLOG",
    blog: {
        id: crypto.randomUUID(),
        img,
        title,
        desc
    }
})

export const editBlog = ( id, update ) => ({
    type: "EDIT_BLOG",
    id,
    update
}) 

export const deleteBlog = ({ id }) => ({
    type: "DELETE_BLOG",
    id
})