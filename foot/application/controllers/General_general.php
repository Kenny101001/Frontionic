<?php

require APPPATH.'libraries/REST_Controller.php';

class General_General extends REST_Controller{
    public function __construct(){
        parent::__construct();
        //load database
        $this->load->database();
        $this->load->model(array("api/General_General_model"));
        $this->load->library(array("form_validation"));
        $this->load->helper("security");
    }
    // GET: <project_url>/index.php/student
    public function index_get(){
        // list data method
        //echo "This is GET Method";
        // SELECT * from tbl_students;
        $ggeneral = $this->General_General_model->get_statsEquipeGeneralGeneral();

        //print_r($query->result());

        if(count($ggeneral) > 0){

        $this->response(array(
            "status" => 1,
            "message" => "General General found",
            "data" => $ggeneral
        ), REST_Controller::HTTP_OK);
        }else{

        $this->response(array(
            "status" => 0,
            "message" => "No General General found",
            "data" => $ggeneral
        ), REST_Controller::HTTP_NOT_FOUND);
        }
    }
}
?>