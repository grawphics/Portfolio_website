export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true, //enables user to crop images
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        }
    ]
}