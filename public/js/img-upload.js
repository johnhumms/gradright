var picture;
      
      var myWidget = cloudinary.createUploadWidget({
        cloudName: 'dxhp3w7sg',
        uploadPreset: 'h2bkr71w'
      }, (error, result) => {
        if (!error && result && result.event === "success") {
          console.log('Done! Here is the image info: ', result.info);

          picture = result.info.secure_url
          console.log(picture);
        }
        console.log('ERRRRRR', error)
      })

async function addImg(event) {
    event.preventDefault();

        console.log('UPload image clicked!!!')
        myWidget.open();
}

document.querySelector('#profile').addEventListener('click', addImg);