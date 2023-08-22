export default function createPage() {
    const par = document.createElement('p');
    
    if (document.body.contains(par)) {
        par.textContent = 'Hello world'
        document.body.appendChild(par);            
    }


}