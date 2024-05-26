import requests  
import json  
import erniebot

erniebot.api_type = 'aistudio'
#erniebot.access_token = '987638273c63153f513c3fee0546cc9989810806'

def Polishing(Statement,Category,Requirements):
    text="对"+Statement+"进行"+Category+"要求"+Requirements
    response = erniebot.ChatCompletion.create(
    model='ernie-3.5',
    messages=[
    {'role': 'user',
     'content': text
     }          
    ])
    return response.get_result()
