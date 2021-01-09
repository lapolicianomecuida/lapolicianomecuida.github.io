const ogs = require('open-graph-scraper');
const csv = require('csvtojson');
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));

async function main() {
  try {
    console.log('get OG data for',argv)
    const { file, output } = argv
    if (!file || !output) return console.log('Missing file and output arguments')

    const data = await csv().fromFile(file);
    let finalData = []
    for (let i = 0; i < data.length; i++) {
      try {
        const ogData = await ogs({ url: data[i]["Enlance"] })
        data[i].ogTitle = ogData.result.ogTitle
        data[i].ogImg = ogData.result.ogImage[0] ? ogData.result.ogImage[0] : ogData.result.ogImage
        finalData.push(data[i]);
      } catch (err) {
        console.log(err);
      }
    };
    console.log('Done!')
    fs.writeFileSync(output, JSON.stringify(finalData));
  } catch (err) {
    console.log(err);
  }
}

main();
