function checkForOverlapping(sorted) {
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[i].starttime + sorted[i].duration > sorted[j].starttime) {
        let err = `${sorted[i].title}, ${sorted[j].title}`;
        throw new Error(err);
      } else if (sorted[i].starttime + sorted[i].duration <= sorted[j].starttime)
        break;
    }
  }
}

function addHtmlReformatTime(result) {
  let timeInCorrectFormat = [];
  for (let i = 0; i < result.length; i++) {
    timeInCorrectFormat.push({
      title: `<p class="title">${result[i].title}</p>`,
      starttime: convertTime(result[i].starttime),
      url: `${result[i].url}`
    });
  }
  return timeInCorrectFormat;
}

function getSortedShows(shows, times) {

  let result = [];//shows.map(show => ({...show, ...times.find(time => time.id === show.id)}));

  //merge shows and times, remove unused properties
  for (const item of shows) {
    let idMatches = times.filter(time => time.id === item.id);
    idMatches.forEach(idMatch => result.push({
      id: item.id,
      title: item.title,
      duration: item.duration,
      url: item.url,
      starttime: idMatch.starttime
    }));
  }

  // sort by start time asc
  result = result
    .sort(function (a, b) {
      return a.starttime - b.starttime;
    });

  //check for overlapping on start times + duration
  checkForOverlapping(result);

  //add html tag and class, reformat time
  return addHtmlReformatTime(result);
}

function convertTime(num) {
  if (num === null || isNaN(num) || parseInt(num) < 0 || parseInt(num) > (1440))
    return '';
  let hours = Math.floor(num / 60);
  let mins = num % 60;
  if (mins < 10) {
    mins = '0' + mins;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
  return hours + ":" + mins;
}

console.log("convertTime(1080)");
console.log(convertTime(1080));

let shows = [{
  id: 1,
  title: 'Once upon node.js',
  duration: 189,
  description: 'A show about the beginning of Javascript',
  url:
    'https://task-static-files.s3.eu-central-1.amazonaws.com/tv-show/4.png'
},
  {
    id: 2,
    title: 'Code runner',
    duration: 95,
    description: '',
    url:
      'https://task-static-files.s3.eu-central-1.amazonaws.com/tv-show/3.jpg'
  },
  {
    id: 3,
    title: 'Vanilla JS',
    duration: 59,
    description: '',
    url:
      'https://task-static-files.s3.eu-central-1.amazonaws.com/tv-show/3.jpg'
  },
  {
    id: 4,
    title: 'Vanilla JAVA',
    duration: 5,
    description: '',
    url:
      'https://task-static-files.s3.eu-central-1.amazonaws.com/tv-show/3.jpg'
  },
  {
    id: 5,
    title: 'Vanilla JAVA',
    duration: 100,
    description: '',
    url:
      'https://task-static-files.s3.eu-central-1.amazonaws.com/tv-show/3.jpg'
  }];

let times = [{starttime: 880, id: 1}, {starttime: 625, id: 2}, {starttime: 59, id: 3}, {
  starttime: 5,
  id: 4
}, {starttime: 20, id: 4}, {starttime: 1081, id: 5}];

console.log(getSortedShows(shows, times));

function getProgress(width, duration, current) {
  if (width === 0 || duration === 0 || current === 0)
    return 0;
  if (duration < current)
    return width;
  return Math.round(width / duration * current);
}

console.log("getProgress(500,90,16)");
console.log(getProgress(500, 90, 16));
console.log(getProgress(200, 37, 100));
