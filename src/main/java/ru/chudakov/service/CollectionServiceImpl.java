package ru.chudakov.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.chudakov.domain.Collection;
import ru.chudakov.repository.CollectionRepository;

@Service
public class CollectionServiceImpl implements CollectionService {
    private CollectionRepository repository;

    @Autowired
    public CollectionServiceImpl(CollectionRepository repository){
        this.repository = repository;
    }

    @Override
    public Collection saveCollection(Collection collection) {
        return repository.save(collection);
    }
}
