package com.dgr.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dgr.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
