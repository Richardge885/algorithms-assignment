# Linear Search function


def find(arr, findItem):
    for i in range(len(arr) - 1):
        if findItem == arr[i]:
            return i
