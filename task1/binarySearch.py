# Binary Search function
from quickSort import sort

"""
@arr = dataset
@ itemToFind = search for
"""


def find(arr, itemToFind):
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
