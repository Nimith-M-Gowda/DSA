function apartmentFinding(blocks, reqs) {
  //code to traverse from left to right
  const traverseFromLtoR = (globalReq, req, objList) => {
    objList.forEach((eachObj, objIndex) => {
      if (eachObj[req] == true) {
        globalReq[objIndex] = 0;
      } else {
        if (objIndex == 0 || globalReq[objIndex - 1] == "X") {
          globalReq.push("X");
        } else {
          globalReq[objIndex] = globalReq[objIndex - 1] + 1;
        }
      }
    });
    return globalReq;
  };

  const traverseFromRightForCorrection = (givenArray) => {
    let counter = givenArray[givenArray.length - 1];

    for (let i = givenArray.length - 1; i != 0; i--) {
      if (
        givenArray[i] > counter &&
        givenArray[i] - counter > 1 &&
        givenArray[i] !== "X"
      ) {
        givenArray[i] = counter + 1;
        counter = givenArray[i];
      }
      counter = givenArray[i];
    }

    return givenArray;
  };

  //code to modify the value of X
  const fillingX = (globalReq) => {
    if (globalReq[globalReq.length - 1] == "X") {
      globalReq.forEach((_, index) => {
        globalReq[index] = 100;
      });
    } else {
      globalReq.reverse();
      globalReq.forEach((_, index) => {
        if (globalReq[index] == "X") {
          globalReq[index] = globalReq[index - 1] + 1;
        }
      });
    }
    return globalReq.reverse();
  };

  //code to create GlobalArray from reqs
  function createObject(eachreqs) {
    let GlobalObject = {};
    GlobalObject[`G` + eachreqs] = [];
    // return GlobalObject[`G` + eachreqs];
    return GlobalObject;
  }

  const resultants = reqs.map((eachReq) => {
    const objReq = createObject(eachReq);
    const afterTraversal = traverseFromLtoR(
      objReq[`G` + eachReq],
      eachReq,
      blocks
    );

    let afterCorrection = traverseFromRightForCorrection(afterTraversal);
    const result = fillingX(afterCorrection);
    return result;
  });

  //get a array of max values in 3 arrays
  const getMaxDistance = (listOfArrays, blocks) => {
    let resultantSolArray = [];
    for (let j = 0; j < blocks.length; j++) {
      let maxVal = -1;
      for (i = 0; i < listOfArrays.length; i++) {
        maxVal = listOfArrays[i][j] > maxVal ? listOfArrays[i][j] : maxVal;
      }
      resultantSolArray.push(maxVal);
    }
    return resultantSolArray;
  };

  //get min value in a given array
  const getIndexOfMinValInArray = (sampleArray) => {
    let minVal = 101;
    sampleArray.forEach((eachVal) => {
      minVal = eachVal < minVal ? eachVal : minVal;
    });
    return sampleArray.indexOf(minVal);
  };

  const maxDistanceArray = getMaxDistance(resultants, blocks);
  const getIndexOfABlock = getIndexOfMinValInArray(maxDistanceArray);

  return getIndexOfABlock;
}

apartmentFinding(blocks, ["gym", "pool", "school", "store"]);

const blocks = [
  {
    gym: true,
    office: false,
    pool: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    office: false,
    pool: false,
    school: false,
    store: false,
  },
  {
    gym: false,
    office: true,
    pool: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    office: true,
    pool: false,
    school: false,
    store: false,
  },
  {
    gym: false,
    office: false,
    pool: false,
    school: false,
    store: true,
  },
  {
    gym: true,
    office: true,
    pool: false,
    school: false,
    store: false,
  },
  {
    gym: false,
    office: false,
    pool: true,
    school: false,
    store: false,
  },
  {
    gym: false,
    office: false,
    pool: false,
    school: false,
    store: false,
  },
  {
    gym: false,
    office: false,
    pool: false,
    school: false,
    store: false,
  },
  {
    gym: false,
    office: false,
    pool: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    office: false,
    pool: true,
    school: false,
    store: false,
  },
];
