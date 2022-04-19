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
		// TODO Auto-generated method stub
		SpringApplication.run(FlauntMain.class, args);
	}

}
