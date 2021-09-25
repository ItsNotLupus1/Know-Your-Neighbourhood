package com.lithan.webhook;

import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@Service
public class MessageSender {

    private static final String HOOKS_URL = "https://hooks.slack.com/services/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";

    private static final Map<String, String> USER_TO_CHANNEL_WEBHOOK = Map.of("LithanWebhooks", "T022XJK4J3T/B0236RG5S65/V1GeJWyuXq67CtpMNTKc3nDD");

    public void sendMessage(String userName, Message message) throws JsonProcessingException{

        String userChannelId = USER_TO_CHANNEL_WEBHOOK.get(userName);

        String userWebhookUrl = String.format(HOOKS_URL, userChannelId);

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(MediaType.APPLICATION_JSON);

        ObjectMapper objectMapper = new ObjectMapper();

        String messageJson = objectMapper.writeValueAsString(message);

        HttpEntity<String> entity = new HttpEntity<>(messageJson, headers);

        restTemplate.exchange(userWebhookUrl, HttpMethod.POST, entity, String.class);

    }

}