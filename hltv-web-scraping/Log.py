class LogScraping:
    
    #construtor
    def __init__(self):
        self.listSuccessUrls = list()
        self.listErrorUrls = list()
    
    #adiciona na lista de urls que deram certo
    def addSuccess(self, url):
        self.listSuccessUrls.append(url)
        
    #adiciona na lista de urls que deram errado
    def addError(self, url):
        self.listErrorUrls.append(url)
    
    #quantidade de urls que não deram certo
    def countError(self):
        return len(self.listErrorUrls)
    
    #quantidade de urls que deram certo
    def countSuccess(self):
        return len(self.listSuccessUrls)
    
    #listando as urls que deram errado
    def listErrors(self):
        for url in self.listErrorUrls:
            print(url)
            
    #listando as urls que deram certo
    def listSuccess(self):
        for url in self.listSuccessUrls:
            print(url)
    
    #listando todas as informações
    def listAll(self):
        print("Urls que deram certo, total [{}]".format(self.countSuccess()))
        for url in self.listSuccessUrls:
            print(url)
            
        print("Urls que deram errado, total [{}]".format(self.countError()))
        for url in self.listSuccessUrls:
            print(url)