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


# Merge Sort Algorithm Implementation
# def sort(arr):
#     if len(arr) > 1:
#         mid = len(arr) // 2
#         left_half = arr[:mid]
#         right_half = arr[mid:]

#         sort(left_half)
#         sort(right_half)

#         i = j = k = 0

#         while i < len(left_half) and j < len(right_half):
#             if left_half[i] < right_half[j]:
#                 arr[k] = left_half[i]
#                 i += 1
#             else:
#                 arr[k] = right_half[j]
#                 j += 1
#             k += 1

#         while i < len(left_half):
#             arr[k] = left_half[i]
#             i += 1
#             k += 1

#         while j < len(right_half):
#             arr[k] = right_half[j]
#             j += 1
#             k += 1
#     return arr
