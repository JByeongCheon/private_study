#https://programmers.co.kr/learn/courses/30/lessons/42577


#파이썬 에서는 range(len(phone_book))의 형태를 추구하지 않는다 
#1차 코드(실패)
def solution(phone_book): #효율성 약 15.4   #속도: 0.04,122정도 
    z = 0
    for i in phone_book:
        for j in phone_book[z + 1:]:
            if i in j[:len(i)]:
               return False
        z += 1

    return True


#질문 게시판 응용 2차 코드(성공))
def solution1(phone_book):
    phone_book.sort() #이걸 넣어야 숫자가 정렬이 되면서 닡에 짠 코드가 성립이 된다.
    z = 0
    for i in phone_book:
        for j in phone_book[z + 1:]:
            if i in j[:len(i)]:
               return False
        z += 1

    return True


#질문게시판에는 트라이구조 혹은 정렬, 해시 사용을 추천함
#sort와 sorted의 차이점

#다른 사람의 풀이

def solution(phoneBook): #천재인가;;; -- 그런데 모든 경우가 다 정답이 되지는 않는다.
    phoneBook = sorted(phoneBook)

    for p1, p2 in zip(phoneBook, phoneBook[1:]): # zip을 사용하면 for을 2번 사용안해도 될듯
        if p2.startswith(p1):
            return False
    return True

import re #정규식 활용 
def solution(phoneBook):

    for b in phoneBook:
        p = re.compile("^"+b)
        for b2 in phoneBook:
            if b != b2 and p.match(b2):
                return False
    return True




from itertools import combinations as c 
def solution(phoneBook):
    answer = True
    sortedPB = sorted(phoneBook, key= len) #sorted(key=)도 괜찮네
    for (a,b) in c( sortedPB,2):
        if a == b[:len(a)]:
            answer = False
    return answer