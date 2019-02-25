package com.iotek.service;

import com.iotek.entity.Resume;

import java.util.List;


public interface ResumeService {
    public void addResume(Resume resume);
    public void updateResume(Resume resume);
    public void deleteResume(Resume resume);
    public List<Resume> getAllResume();
    public Resume getResumeByUid(int uid);
    public Resume getResumeByRid(int rid);
    public Resume looKResume();
}
