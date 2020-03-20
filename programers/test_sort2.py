#프로그래머스 문제(https://programmers.co.kr/learn/courses/30/lessons/42746)

#ㄹㅇ 천재새끼들
def solution(numbers): 
    numbers = list(map(str, numbers)) 
    numbers.sort(key=lambda x: x*3, reverse=True)  #문자의 정렬은 666,101010, 222가 되더라도 앞의 숫자 6,1,2로 정렬을 하기 때문에 10,2,6이 된다.
    
    return str(int(''.join(numbers)))



def main():
    numbers = []
   print(solution(numbers))
   

if __name__ == '__main__':
    main()
    