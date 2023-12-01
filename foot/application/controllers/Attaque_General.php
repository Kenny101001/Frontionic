<?php

require APPPATH.'libraries/REST_Controller.php';

class Attaque_General extends REST_Controller{

    public function __construct(){
    parent::__construct();
    //load database
    $this->load->database();
    $this->load->model(array("api/Attaque_General_model"));
    $this->load->library(array("form_validation"));
    $this->load->helper("security");
    }
    // GET: <project_url>/index.php/student
    public function index_get(){
        // list data method
        //echo "This is GET Method";
        // SELECT * from tbl_students;
        $ageneral = $this->Attaque_General_model->get_statsEquipeAttaqueGeneral();
        // $students = $this->student_model->get_students();
        //print_r($query->result());

        if(count($ageneral) > 0){

        $this->response(array(
            "status" => 1,
            "message" => "Attaque General found",
            "data" => $ageneral
        ), REST_Controller::HTTP_OK);
        }else{

        $this->response(array(
            "status" => 0,
            "message" => "No Attaque General found",
            "data" => $ageneral
        ), REST_Controller::HTTP_NOT_FOUND);
        }
    }
}
?>