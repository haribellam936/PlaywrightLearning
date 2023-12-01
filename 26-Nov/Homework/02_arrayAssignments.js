// Move Zeros
function moveZeroes(nums) {
    let Index = 0;  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[Index++] = nums[i];
      }
    }  
    for (let i = Index; i < nums.length; i++) {
      nums[i] = 0;
    }  
    return nums;
  }  
  // Example:
  const nums1 = [0, 1, 0, 3, 12];
  console.log(moveZeroes(nums1));  
  const nums2 = [0];
  console.log(moveZeroes(nums2));  

  // Array Intersection
  function intersection(nums3, nums4) {
    const set1 = new Set(nums3);
    const set2 = new Set(nums4);
    const result = [];  
    for (const num of set1) {
      if (set2.has(num)) {
        result.push(num);
      }
    }  
    return result;
  }  
  // Example:
  const nums3 = [1, 2, 2, 1];
  const nums4 = [2, 2];
  console.log(intersection(nums3, nums4)); 

  const nums5 = [4, 9, 5];
  const nums6 = [9, 4, 9, 8, 4];
  console.log(intersection(nums5, nums6));  
  
  // Find the Max and Min
  function findMaxAndMin(nums) {
    if (nums.length === 0) {
      return "Array is empty.";
    }  
    let maxIndex = 0;
    let minIndex = 0;  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[maxIndex]) {
        maxIndex = i;
      } else if (nums[i] < nums[minIndex]) {
        minIndex = i;
      }
    }  
    const result = {
      maxElement: nums[maxIndex],
      maxIndex: maxIndex,
      minElement: nums[minIndex],
      minIndex: minIndex,
    };  
    return result;
  }  
  // Example:
  const nums = [34, 7, 21, 89, 54, 10, 91, 67];
  const result = findMaxAndMin(nums);
  console.log(`Maximum Element: ${result.maxElement}, Index: ${result.maxIndex}`);
  console.log(`Minimum Element: ${result.minElement}, Index: ${result.minIndex}`);

  // Remove Duplicates
  function removeDuplicates(inputArray) {
    const uniqueSet = new Set();
    const resultArray = [];

    for (const element of inputArray) {
      if (!uniqueSet.has(element)) {
        uniqueSet.add(element);
        resultArray.push(element);
      }
    }  
    return resultArray;
  }  
  // Example :
  const inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6];
  const resultArray = removeDuplicates(inputArray);
  console.log(resultArray);
  
  