package com.flaunt.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;

import com.flaunt.configuration.AppConfiguration;

@SpringBootApplication
@ComponentScan(basePackages = {"com.flaunt"})
@EnableConfigurationProperties(AppConfiguration.class)
public class FlauntMain {

	public static void main(String[] args) {
		SpringApplication.run(FlauntMain.class, args);
	}

}
