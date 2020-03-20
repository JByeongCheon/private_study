#문제(https://programmers.co.kr/learn/courses/30/lessons/42748)
#내 풀이
def solution(array, commands):
    answer = []    cutingList = []

    for i in range(len(commands)):
        cutingList = array[commands[i][0] - 1:commands[i][1]] #array 배열을 잘랐다.
        cutingList.sort()
        answer.append(cutingList[commands[i][2] - 1])
       

    return answer

    
#다른 사람 풀이 - 다들 천재인가봐

#lamda함수와 map함수
def solution1(array,commands):
    return list(map(lambda x: sorted(array[x[0] - 1 : x[1]])[x[2] - 1],commands))

def solution2(array, commands):
    answer = []

    for command in commands: 
        answer.append(sorted(array[command[0] - 1 : command[1]])[command[2] - 1])
 
    return answer



def main():
    array = [1, 5, 2, 6, 3, 7, 4]
    commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
    print(solution2(array,commands)) #다름 함수 결과 확인시 여기만 수정
    
    
if __name__ == '__main__':
    main()