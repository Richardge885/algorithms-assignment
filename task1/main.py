# import modules which contains different sorting and searching algorithms
import quickSort
import mergeSort
import binarySearch
import linearSearch

# Menu option at beginning of program


# Search menu needs rebuilding
def menu(dataset):
    choice = int(
        input(
            "Enter 1 for Quick Sort\nEnter 2 for Merge Sort\nEnter 3 to use linear search\nEnter 4 to use binary search\nEnter 5 to exit\n"
        )
    )
    if choice == 1:
        print(quickSort.sort(dataset, 0, len(dataset) - 1))
    elif choice == 2:
        print(mergeSort.sort(dataset))
    elif choice == 3:
        linearSearch.find(
            dataset, itemToFind
        )  # 1 is place holder for the editor to not give error message, will be taken away in the future
    elif choice == 4:
        binarySearch.find(
            dataset, itemToFind
        )  # 1 is place holder for the editor to not give error message, will be taken away in the future
    elif choice == 5:
        return

    else:
        print("Please enter a valid option")
        menu(dataset)


if __name__ == "__main__":
    # Dataset change numbers for different results
    # Only valid when working with numbers
    dataset = [1, 4, 2, 3, 8, 0, 9, 7, 5]
    menu(dataset)
