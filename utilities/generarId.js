export const generarId = () => {
    const id = Math.random().toString(30).substring(2);

    return id;
}