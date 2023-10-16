export const binarySearch = (nums, target) => {
    let start = 0
    let end = nums.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            start = middle + 1
        } else {
            end = middle - 1;
        }
    }
    return -1;
};

export const binarySearchRecursive = (nums, target) => {
    const search = (start, end) => {
        if (start > end) {
            return -1; 
        }

        const mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return mid; 
        } else if (nums[mid] > target) {
            return search(start, mid - 1); 
        } else {
            return search(mid + 1, end); 
        }
    };

    return search(0, nums.length - 1);
    
};

