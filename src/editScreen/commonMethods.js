import ImagePicker from 'react-native-image-crop-picker';

export const CommonMethods = {
  imagePicker:(callback)=>{
    console.warn("callback")
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      callback(image.path);
    });
  },
};
