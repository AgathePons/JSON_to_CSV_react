// == Utils

export const IsCorrectJson = (jsonContent) => {
  try {
    JSON.parse(jsonContent);
  }
  catch {
    return false;
  }
  return true;
};

export const jsonToCsv = (jsonContent) => {
  // build header line
  const keys = Object.keys(jsonContent[0]);
  let firstLine = '';
  keys.forEach((key) => {
    firstLine += `"${key}",`;
  });
  firstLine = firstLine.slice(0, -1);
  console.log(firstLine);
  // build body lines
  const bodyLines = jsonContent.map((element) => {
    const values = Object.values(element);
    let line = '';
    values.forEach((value) => {
      line += `"${value}",`;
    });
    line = line.slice(0, -1);
    return line;
  });
  console.table(bodyLines);
  // glue head and body
  const csvString = `${firstLine}\n${bodyLines.join('\n')}`;
  console.log(csvString);
  return csvString;
};
