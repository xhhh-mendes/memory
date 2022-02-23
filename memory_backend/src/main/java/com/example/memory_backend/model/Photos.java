package com.example.memory_backend.model;


import javax.persistence.*;
import java.sql.Blob;

@Entity
@Table(name = "photos")
public class Photos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name", nullable = true)
    private String name;

    @Lob
    @Column(name = "imageURI", nullable = true)
    private String imageURI;


    public Photos() {
    }

    public Photos(int id, String name, String imageURI) {
        this.id = id;
        this.name = name;
        this.imageURI = imageURI;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageURI(){return imageURI;}

    public void setImageURI(String imageURI) {
        this.imageURI = imageURI;
    }

}
