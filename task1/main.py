# TODO: Search menu needs rebuilding

# import modules which contains different sorting and searching algorithms
import quickSort
import mergeSort
import binarySearch
import linearSearch

# Menu option at beginning of program


def menu(dataset):
    while True:
        try:
            choice = int(
                input(
                    "Enter 1 for Quick Sort\nEnter 2 for Merge Sort\nEnter 3 to use linear search\nEnter 4 to use binary search\nEnter 5 to exit\n"
                )
            )
            if choice == 1:
                print("Original dataset is ", dataset, "\n")
                print(quickSort.sort(dataset, 0, len(dataset) - 1))
            elif choice == 2:
                print(dataset, "\n")

                mergeSort.sort(dataset, 0)
            elif choice == 3:
                print("Within this dataset ", dataset)
                itemToFind = int(input("What do you want to search for: "))
                position = str(linearSearch.find(dataset, itemToFind))
                print("The item you want to find is in position " + position)
                print("of the dataset", dataset)
            elif choice == 4:
                print("Within this dataset ", dataset)
                itemToFind = int(input("What do you want to search for: "))
                position = str(binarySearch.find(dataset, itemToFind))
                print("\n\n\n")
                print("The item you want to find is in position " + position)
                # print("of the sorted dataset", dataset)
            elif choice == 5:
                break
        except:
            print("Please enter a valid option\n")


if __name__ == "__main__":
    # Dataset change numbers for different results
    # Only valid when working with numbers
    dataset = [1, 9, 4, 2, 3, 8, 0, 9, 7, 5]
    menu(dataset)
