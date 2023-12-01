<?php

require APPPATH.'libraries/REST_Controller.php';

class General_Exterieur extends REST_Controller{
    public function __construct(){
        parent::__construct();
        //load database
        $this->load->database();
        $this->load->model(array("api/General_Exterieur_model"));
        $this->load->library(array("form_validation"));
        $this->load->helper("security");
    }

    // GET: <project_url>/index.php/student
    public function index_get(){
        // list data method
        //echo "This is GET Method";
        // SELECT * from tbl_students;
        $gexterieur = $this->General_Exterieur_model->get_statsEquipeGeneralExterieur();

        //print_r($query->result());

        if(count($gexterieur) > 0){

        $this->response(array(
            "status" => 1,
            "message" => "General Exterieur found",
            "data" => $gexterieur
        ), REST_Controller::HTTP_OK);
        }else{

        $this->response(array(
            "status" => 0,
            "message" => "No General Exterieur found",
            "data" => $gexterieur
        ), REST_Controller::HTTP_NOT_FOUND);
        }
    }
}
?>