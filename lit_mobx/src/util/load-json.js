export default async function loadJson(src) {
    try {
        let response = await fetch(src);
        return await response.json();
    } catch(e) {
        console.log('Error', e.message);
    }
}