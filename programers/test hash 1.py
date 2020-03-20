#프로그래머스 해시 코드(https://programmers.co.kr/learn/courses/30/lessons/42576)
def solution(participant, completion):
    participant.sort()
    completion.sort()
   
    for i,j in zip(participant,completion):
        if i != j:
           
            return i
    return participant[-1]

def main():
    a= ['leo', 'kiki', 'kden']
    b = ['eden', 'kiki']
    print(solution(a,b))

if __name__ == '__main__':
    main()

#다른 풀이

import collections

#collections.counter 활용
def solution1(participant, completion):
    answer = collections.Counter(participant) - collections.Counter(completion)
    return list(answer.keys())[0]
    

