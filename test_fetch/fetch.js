const get = async (id) => {
    const result = await fetch(`https://testapi.io/api/converse/resource/blogs/${id}`);
    const data = await result.json();
    return data;
}
module.exports = get;