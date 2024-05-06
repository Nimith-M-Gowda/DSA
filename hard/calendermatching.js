function calendarMatching(
  calendar1,
  dailyBounds1,
  calendar2,
  dailyBounds2,
  meetingDuration
) {
  //takes dailyBounds and calender and come up with complete day schedule
  const getUpdatedCalenders = (dailyBounds, calender) => {
    let updatedCalender = calender;
    updatedCalender.unshift(["0:00", dailyBounds[0]]);
    updatedCalender.push([dailyBounds[1], "23:59"]);
    return updatedCalender;
  };

  const mergeCalendersBasedOnSorting = (cal1, cal2) => {
    let mergedCalender = [];
    let cal1index = 0;
    let cal2index = 0;

    while (cal1index < cal1.length && cal2index < cal2.length) {
      if (
        Number(cal1[cal1index][0].replace(/:/g, "")) <
        Number(cal2[cal2index][0].replace(/:/g, ""))
      ) {
        mergedCalender.push(cal1[cal1index]);
        cal1index++;
      } else if (
        Number(cal1[cal1index][0].replace(/:/g, "")) ===
        Number(cal2[cal2index][0].replace(/:/g, ""))
      ) {
        if (
          Number(cal1[cal1index][1].replace(/:/g, "")) <
          Number(cal2[cal2index][1].replace(/:/g, ""))
        ) {
          mergedCalender.push(cal1[cal1index]);
          cal1index++;
        } else {
          mergedCalender.push(cal2[cal2index]);
          cal2index++;
        }
      } else {
        mergedCalender.push(cal2[cal2index]);
        cal2index++;
      }
    }
    if (cal1index > cal1.length) {
      while (cal2index < cal2.length) {
        mergedCalender.push(cal2[cal2index]);
        cal2index++;
      }
    }
    if (cal2index > cal2.length) {
      while (cal1index < cal1.length) {
        mergedCalender.push(cal1[cal1index]);
        cal1index++;
      }
    }

    return mergedCalender;
  };

  const getFlattenedCalender = (givenCalender) => {
    let resultantCalender = [];
    let i = 0;

    while (i < givenCalender.length) {
      if (i == givenCalender.length - 1) {
        resultantCalender.push(givenCalender[i]);
        i += 1;
      } else if (
        Number(givenCalender[i][1].replace(/:/g, "")) >=
        Number(givenCalender[i + 1][0].replace(/:/g, ""))
      ) {
        givenCalender[i + 1][0] = givenCalender[i][0];
        givenCalender[i + 1][1] =
          Number(givenCalender[i][1].replace(/:/g, "")) >
          Number(givenCalender[i + 1][1].replace(/:/g, ""))
            ? givenCalender[i][1]
            : givenCalender[i + 1][1];
        i += 1;
      } else {
        resultantCalender.push(givenCalender[i]);
        i += 1;
      }
    }

    return resultantCalender;
  };

  const getFreeTimeInCalender = (givenCalender) => {
    let freeTimeCalender = [];

    let i = 0;
    while (i < givenCalender.length - 1) {
      freeTimeCalender.push([givenCalender[i][1], givenCalender[i + 1][0]]);
      i++;
    }
    return freeTimeCalender;
  };

  const getTimeDiff = (time1, time2) => {
    const convertStringToMins = (givenTime) => {
      const newGivenTime = givenTime.split(":");
      return Number(newGivenTime[0] * 60) + Number(newGivenTime[1]);
    };

    const convertMinsToHrs = (givenTime) => {
      return givenTime / 60;
    };

    const convertHrsToMins = (givenTime) => {
      return givenTime * 60;
    };

    const getTimeDiffInMins =
      Number(convertStringToMins(time1)) - Number(convertStringToMins(time2));
    const timeDiffInInHrs = convertMinsToHrs(getTimeDiffInMins);
    return convertHrsToMins(timeDiffInInHrs);
  };

  const filterBasedOnTimeBound = (cal, meetingDuration) => {
    const result = [];
    let i = 0;

    while (i < cal.length) {
      if (getTimeDiff(cal[i][1], cal[i][0]) >= meetingDuration) {
        result.push(cal[i]);
      }
      i++;
    }

    return result;
  };

  const updatedCal1 = getUpdatedCalenders(dailyBounds1, calendar1);
  const updatedCal2 = getUpdatedCalenders(dailyBounds2, calendar2);

  const mergedCalender = mergeCalendersBasedOnSorting(updatedCal1, updatedCal2);

  const getBusyTimeInCalender = getFlattenedCalender(mergedCalender);
  const freeCalender = getFreeTimeInCalender(getBusyTimeInCalender);
  return filterBasedOnTimeBound(freeCalender, meetingDuration);
}

calender1 = [
  ["10:00", "10:30"],
  ["10:45", "11:15"],
  ["11:30", "13:00"],
  ["14:15", "16:00"],
  ["16:00", "18:00"],
];
dailyBounds1 = ["9:30", "20:00"];
calendar2 = [
  ["10:00", "11:00"],
  ["10:30", "16:30"],
];
dailyBounds2 = ["9:00", "22:30"];
meetingDuration = 60;
console.log(
  calendarMatching(
    calender1,
    dailyBounds1,
    calendar2,
    dailyBounds2,
    meetingDuration
  )
);
