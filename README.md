# Учебная сборка Loftschool

> Сборка работает на gulp версии 4.0. 

#### Для начала работы

1. ```clone this repo```
2. ```cd path/to/...```
3. ```npm install gulpjs/gulp-cli -g```  
> Установка последней версии Gulp CLI tools глобально (подробнее - [GitHub](https://github.com/gulpjs/gulp/blob/4.0/docs/getting-started.md) )

4. ```npm install```
6. ```run gulp``` 

Киргетов Александр Валерьевич

Добавлены два таска: genimage вызывает плагин spritesmith для соединения файлов в спрайт и генерации файла стилей, copy копирует все файлы и директории из папок images и fonts в папку build/assets. 
