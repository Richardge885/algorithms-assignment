# Binary Search function
from mergeSort import sort


def find(arr, itemToFind):
    arr = sort(arr)
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2

        if arr[mid] < itemToFind:
            low = mid + 1
        elif arr[mid] > itemToFind:
            high = mid - 1
        else:
            return mid
    return -1
