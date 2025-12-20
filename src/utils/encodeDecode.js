export const encodeObject = (data) => {
  //   const json = JSON.stringify(dataObj);
  const encoded = btoa(
    encodeURIComponent(data).replace(/%([0-9A-F]{2})/g, (_, p1) =>
      String.fromCharCode("0x" + p1)
    )
  );
  return encoded;
};

export const decodeObject = (encoded) => {
  const decoded = decodeURIComponent(
    atob(encoded)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
  return JSON.parse(decoded);
};
