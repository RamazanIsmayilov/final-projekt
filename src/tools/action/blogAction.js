export const addBlog = ({ cImg, cTitle, cDesc }) => ({
    type: "ADD_BLOG",
    blog: {
        id: crypto.randomUUID(),
        title: cTitle,
        img: cImg,
        desc: cDesc
    }
})