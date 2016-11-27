package com.miya.masa.config;

import java.util.concurrent.TimeUnit;

import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JSR310Module;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
public class RestConfig extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureJacksonObjectMapper(ObjectMapper objectMapper) {
        objectMapper.registerModule(new JSR310Module());
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.setBasePath("api");
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

    @Bean
    public ServletRequestListener servletRequestListener() {

        return new ServletRequestListener() {

            @Override
            public void requestInitialized(ServletRequestEvent sre) {
                log.info("Sleep Thread");
                try {
                    TimeUnit.MILLISECONDS.sleep(500);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                log.info("Resume Thread");

            }

            @Override
            public void requestDestroyed(ServletRequestEvent sre) {

            }
        };

    }

}
