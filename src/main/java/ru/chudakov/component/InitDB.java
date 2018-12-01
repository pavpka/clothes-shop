package ru.chudakov.component;

import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.chudakov.domain.Clothes;
import ru.chudakov.domain.Collection;
import ru.chudakov.domain.Type;
import ru.chudakov.repository.ClothesRepository;
import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Component
public class InitDB {
    private ClothesRepository repository;

    @Autowired
    public InitDB(ClothesRepository repository) {
        this.repository = repository;
    }

    @PostConstruct
    public void init() throws IOException, ParseException {
        Type type = new Type("блузки и рубашки");
        Collection collection = new Collection("Новогодняя колекция 2019");
        JSONParser parser = new JSONParser();
        JSONArray array = (JSONArray) parser.parse(new FileReader
                (new File(".").getAbsolutePath() + "\\load\\shirts.json"));
        List<Clothes> list = new ArrayList<>();
        boolean isCollection = true;
        for (Object o : array) {
            JSONObject data = (JSONObject) o;
            Clothes clothes =  new Clothes(
                    (String) data.get("name"),
                    (String) data.get("img"),
                    (String) data.get("price"),
                    type
            );
            if (isCollection){
                clothes.setCollection(collection);
                isCollection = false;
            } else {
                isCollection = true;
            }
            list.add(clothes);
        }
        repository.saveAll(list);
    }
}
