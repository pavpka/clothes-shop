package ru.chudakov.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@RequiredArgsConstructor
public class Clothes {
    @Id
    @GeneratedValue
    private int id;

    @NonNull
    private String name;

    @NonNull
    private String refImg;

    @NonNull
    private String price;

    @NonNull
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "type_id")
    private Type type;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "collection_id")
    private Collection collection;
}
