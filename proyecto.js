function download() {
    let file = new Blob(['Hello, I am downloaded'], {type: 'text/plain'});
    let fileRoute = window.URL.createObjectURL(file);
    let a = document.createElement('a');
    a.setAttribute('href', fileRoute);
    a.setAttribute('download', 'codepen-lolfail.txt');
    document.getElementById('div').appendChild(a);
    a.click();
    document.getElementById('div').removeChild(a); 
  };
  
  document.getElementById('download').addEventListener('click', download);