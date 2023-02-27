# # Merge Sort algorithm code
def sort(arr, step):
    step += 1
    if len(arr) == 1:
        return arr
    length = len(arr)
    mid = length // 2
    left = arr[:mid]
    right = arr[mid:]
    print("Step number ", step)
    print("Left {}".format(left))
    print("Right {}".format(right))
    print()
    return merge(sort(left, step), sort(right, step))


def merge(left, right):
    result = []
    leftindex = 0
    rightindex = 0
    while leftindex < len(left) and rightindex < len(right):
        if left[leftindex] < right[rightindex]:
            result.append(left[leftindex])
            leftindex += 1
        else:
            result.append(right[rightindex])
            rightindex += 1
    print(left, right)
    print(result + left[leftindex:] + right[rightindex:])
    print()
    return result + left[leftindex:] + right[rightindex:]
