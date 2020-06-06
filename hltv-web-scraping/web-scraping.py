import time
import requests as request
from selenium import webdriver
import LogScraping

#executable_path = caminho onde esta o driver executavel do seu navegador 
driver = webdriver.Chrome(executable_path='C:\Program Files\chromedriver\chromedriver.exe')

#api de geração de urls do hltv github: https://github.com/Murilobdo/make-urls-hltv
urls = request.get('http://localhost:3000/Results/').json()

#objeto de log
log = LogScraping.LogScraping()

#count = 0
for url in urls['result']:
    #count += 1
    driver.get(url)
    try:
        if(driver.find_element_by_class_name("stream-box").text == 'GOTV Demo'):
            driver.find_element_by_class_name("stream-box").click()
            log.addSucces(url)
        else:
            log.addError(url)
            continue
    except:
        log.addError(url)
        print("url invalida: {}".format(url))

    #if count >= 5:
        #break
    
    time.sleep(45)
    
print(log.listAll())
    