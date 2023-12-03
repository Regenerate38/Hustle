const toBase64 = (e) => {
  let result;
  const reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = () => {
    result = reader.result;
  };
  return result;
};

export default toBase64;